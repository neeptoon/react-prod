type Mode = Record<string, boolean>

/**
 * Формирует класс для компонента
 *
 * @param {cls} string - Главный класс
 * @param {mode=} Mode - Объект с булевыми значениями для классов
 * @param {classes} string[] - Массив с классами
 */


export function classNames(cls: string, mode?: Mode, classes: string[] = []): string {
    return [
        cls,
        ...classes,
        ...Object.keys(mode || {}).filter((key) => {
            if (mode) {
                mode[key]
            }
            })
    ].join(' ')
}
