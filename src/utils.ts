export const mergeClassName = (firstValue: string, secondValue?: string) => {
    return firstValue + ' ' + (secondValue || '');
};
