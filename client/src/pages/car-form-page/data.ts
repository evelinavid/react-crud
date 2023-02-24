const title = {
  edit: 'Update car',
  create: 'Create car',
};

const btnText = {
  edit: 'Update',
  create: 'Create',
};
const color = {
  edit: 'warning',
  create: 'secondary',
} as const;

const colorMain = {
  edit: 'warning.main',
  create: 'secondary.main',
} as const;

export const getModeData = (mode:'create' | 'edit') => ({
  title: title[mode],
  btnText: btnText[mode],
  color: color[mode],
  colorMain: colorMain[mode],
});
