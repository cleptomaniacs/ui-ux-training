const Sorting = ({ key, dir, data }) => {
  let lowerKey = key.toLowerCase();
  if (key === "#") {
    lowerKey = "_id";
  }
  if (lowerKey === "action") {
    return data;
  }
  if (dir) {
    return sortDescending(data, lowerKey);
  }
  if (!dir) {
    return sortAscending(data, lowerKey);
  }
  return data;
};

const sortDescending = (array, key) => {
  return array.sort((a, b) => {
    // Check if the values are strings
    if (typeof a[key] === "string" && typeof b[key] === "string") {
      return b[key].localeCompare(a[key]); // Sort strings in descending order
    } else {
      // If values are not strings, assume they are numbers
      return b[key] - a[key]; // Sort numbers in descending order
    }
  });
};

const sortAscending = (array, key) => {
  return array.sort((a, b) => {
    // Check if the values are strings
    if (typeof a[key] === "string" && typeof b[key] === "string") {
      return a[key].localeCompare(b[key]); // Sort strings in ascending order
    } else {
      // If values are not strings, assume they are numbers
      return a[key] - b[key]; // Sort numbers in ascending order
    }
  });
};

export default Sorting;
