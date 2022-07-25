import * as React from 'react';
import { useReducer, createContext } from 'react';

const initialScoreBoard = { home: 0, away: 1 };

/**
 * Create Context with default state
 */
export const ScoreContext = createContext({
  scores: initialScoreBoard,
  incrementScore: () => null,
  decrementScore: () => null,
});

/**
 * Implement useState for state mgt
 * Expose useState to Context Provider for Accessibility
 * return Context Provider
 */
export const ScoreProvider = ({ children }) => {
  const INITIAL_STATE = {
    scores: { home: 0, away: 1 },
  };

  const SCORE_ACTION_TYPES = {
    SET_SCORES: 'SET_SCORES',
  };

  const scoreBoardReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case SCORE_ACTION_TYPES.SET_SCORES:
        return { scores: payload, ...state };
      default:
        throw new Error(`Invalid action ${type}`);
    }
  };

  const setScores = (scores) => {
    dispatch({ type: SCORE_ACTION_TYPES.SET_SCORES, payload: scores });
  };

  const [{ scores }, dispatch] = useReducer(scoreBoardReducer, INITIAL_STATE);

  const incrementScore = (team) => {
    team === 'home'
      ? setScores({ home: scores.home++, ...scores })
      : setScores({ away: scores.away++, ...scores });
  };

  const decrementScore = (team) => {
    if (team === 'home') {
      if (scores.home === 0) return;
      setScores({ home: scores.home--, ...scores });
    }

    if (team === 'away') {
      if (scores.away === 0) return;
      setScores({ away: scores.away--, ...scores });
    }
  };

  const value = { scores, incrementScore, decrementScore };

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};
