const calculateStylePoints = (styleNotes) => {
    if (Array.isArray(styleNotes)){
      return styleNotes.sort((a, b) => a - b).slice(1, 4).reduce((sum, el) => sum + el);
    }

    return -1;
    //console.log(notes);
  };
  
module.exports = calculateStylePoints;