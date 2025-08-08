import type { Cycle } from "./reducer";

export const ActionTypes = {
  ADD_NEW_CYCLE: "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE: "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED: "MARK_CURRENT_CYCLE_AS_FINISHED",
} as const;

export interface AddNewCycleAction {
  type: typeof ActionTypes.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
}

export interface MarkCurrentCycleAsFinishedAction {
  type: typeof ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED;
}

export interface InterruptCurrentCycleAction {
  type: typeof ActionTypes.INTERRUPT_CURRENT_CYCLE;
}

export type CyclesAction =
  | AddNewCycleAction
  | MarkCurrentCycleAsFinishedAction
  | InterruptCurrentCycleAction;

export function addNewCycleAction(newCycle: Cycle): AddNewCycleAction {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedAction {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction(): InterruptCurrentCycleAction {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}
