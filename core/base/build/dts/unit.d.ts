import Decimal from 'decimal.js';

type ValidValue = string | number | Decimal | Unit;

declare class Unit {
    public value: Decimal;
    constructor(value: ValidValue);
    static fromStandardUnit: (value: string | number | Decimal, decimals?: number) => Unit;
    static fromMinUnit: (value: string | number | Decimal) => Unit;
    static fromDecimal: (value: string | number | Decimal) => Unit;
    static equals: (a: ValidValue, b: ValidValue) => boolean;
    static min: (a: ValidValue, b: ValidValue) => Unit;
    static max: (a: ValidValue, b: ValidValue) => Unit;
    static clamp: (value: ValidValue, min: ValidValue, max: ValidValue) => Unit;
    static lessThan: (a: ValidValue, b: ValidValue) => boolean;
    static greaterThan: (a: ValidValue, b: ValidValue) => boolean;
    static lessThanOrEqualTo: (a: ValidValue, b: ValidValue) => boolean;
    static greaterThanOrEqualTo: (a: ValidValue, b: ValidValue) => boolean;
    static add: (a: ValidValue, b: ValidValue) => Unit;
    static sub: (a: ValidValue, b: ValidValue) => Unit;
    static mul: (a: ValidValue, b: ValidValue) => Unit;
    static div: (a: ValidValue, b: ValidValue) => Unit;
    static pow: (a: ValidValue, b: ValidValue) => Unit;
    static log: (a: ValidValue, b: ValidValue) => Unit;
    static sqrt: (target: ValidValue) => Unit;
    static mod: (a: ValidValue, b: ValidValue) => Unit;
    static isNaN: (target: ValidValue) => boolean;
    static isFinite: (target: ValidValue) => boolean;
    equals: (another: ValidValue) => boolean;
    lessThan: (another: ValidValue) => boolean;
    greaterThan: (another: ValidValue) => boolean;
    lessThanOrEqualTo: (another: ValidValue) => boolean;
    greaterThanOrEqualTo: (another: ValidValue) => boolean;
    add: (another: ValidValue) => Unit;
    sub: (another: ValidValue) => Unit;
    mul: (another: ValidValue) => Unit;
    div: (another: ValidValue) => Unit;
    pow: (another: ValidValue) => Unit;
    log: (another: ValidValue) => Unit;
    sqrt: () => Unit;
    mod: (another: ValidValue) => Unit;
    isNaN: () => boolean;
    isFinite: () => boolean;
    equalsWith: (another: ValidValue) => boolean;
    toDecimalStandardUnit: (toFixed?: number | undefined, decimals?: number) => string;
    toHexStandardUnit: (decimals?: number | undefined) => string;
    toDecimalMinUnit: (toFixed?: number | undefined) => string;
    toHexMinUnit: () => string;
    toDecimal: () => Decimal;
    [Symbol.toPrimitive](hint: 'string' | 'number' | 'default'): string | Decimal;
}
export default Unit;
