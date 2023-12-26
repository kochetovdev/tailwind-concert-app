import plugin from "tailwindcss/plugin";

const buttonPlugin = plugin(({ matchComponents, addComponents, theme }) => {
  addComponents({
    ".btn": {
      display: "inline-block",
      cursor: "pointer",
      fontWeight: "bold",
      padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
      borderRadius: theme('borderRadius')?.lg,
    },
  });

  const colors = theme("colors");

  if (colors) {
    Object.keys(colors).forEach((key) => {
      const colorValue = colors[key];
      if (colorValue && (typeof colorValue === 'string' || typeof colorValue.base === 'string')) {
        addComponents({
          [`.btn-${key}-${colorValue}`]: {
            backgroundColor: colorValue,
          },
        });
      }
    });
  }
});

module.exports = buttonPlugin;

