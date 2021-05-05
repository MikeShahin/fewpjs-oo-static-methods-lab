class Formatter {
  //add static methods here

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, "")
  }

  static titleize(title) {
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let solution = [];
    let titleSplit = title.split(" ");

    for (let i = 0; i < titleSplit.length; i++) {
      if (i == 0) {
        solution.push(this.capitalize(titleSplit[i]))
      } else {
        if (noCap.includes(titleSplit[i])) {
          solution.push(titleSplit[i])
        } else {
          solution.push(this.capitalize(titleSplit[i]))
        }
      }
    }
    return solution.join( " " );
  }
}
