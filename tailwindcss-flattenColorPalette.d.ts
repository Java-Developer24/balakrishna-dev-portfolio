declare module 'tailwindcss/lib/util/flattenColorPalette' {
    interface Theme {
        [key: string]: string | number | object; // Adjust types as necessary
    }

    const flattenColorPalette: (theme: Theme) => Record<string, string | number | object>; // Adjust return type as necessary
    export default flattenColorPalette;
}