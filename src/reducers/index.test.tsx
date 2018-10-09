import { enthusiasm } from "./index";
import { StoreState } from '../types/index';
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions/index';

const defaultState: StoreState = {
    languageName: 'javaScript',
    enthusiasmLevel: 1
};

it("javaScript", () => {
    expect(enthusiasm(defaultState, decrementEnthusiasm()).languageName).toEqual("javaScript");
});

it("Increase to 2", () => {
    expect(enthusiasm(defaultState, incrementEnthusiasm()).enthusiasmLevel).toEqual(2);
});

it("decrease to 1", () => {
    expect(enthusiasm(defaultState, decrementEnthusiasm()).enthusiasmLevel).toEqual(1);
});