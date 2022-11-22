const InputSearch = (arr, word) => {
    const filteredArr = arr.filter((item) =>
      item.name.toLowerCase().includes(word.toLowerCase()),
    );
    return filteredArr;
  };

  export default InputSearch