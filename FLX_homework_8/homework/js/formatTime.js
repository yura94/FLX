function formatTime(value) {
  let minutes = value % 60;
  let hours = ((value - minutes) / 60) % 24;
  let days = (value - minutes - hours * 60) / 1440;

  return `${days}day(s) ${hours}hour(s) ${minutes}minute(s)`;
}

formatTime(3601);
