const switchFiltering = (status: string) => ({
  type: "SWITCH_FILTERING",
  payload: {
    status,
  },
});

export const filter = { switchFiltering };
