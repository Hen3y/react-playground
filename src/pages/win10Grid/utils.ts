export const setElementStyleWhenMouseIn = (
  element: HTMLElement,
  pointer: { clientX: number; clientY: number },
  stringTemp: (x: number, y: number) => string
) => {
  const rect = element.getBoundingClientRect();
  element.setAttribute(
    'style',
    stringTemp(pointer.clientX - rect.left, pointer.clientY - rect.top)
  );
};
