function processStudentMarks(marks) {
  try {
    if (!Array.isArray(marks)) {
      throw new TypeError("Input must be an array.");
    }
    if (marks.length !== 5) {
      throw new Error("Array must contain exactly 5 student marks.");
    }
    if (!marks.every((m) => typeof m === "number" && !isNaN(m))) {
      throw new TypeError("All marks must be valid numbers.");
    }

    console.log("Original marks (forEach):");
    marks.forEach((mark, index) => {
      console.log(`Student ${index + 1}: ${mark}`);
    });
    const bonusMarks = marks.map((mark) => mark + 5);
    console.log("\nMarks after adding 5 bonus marks (map):", bonusMarks);

    const above75 = bonusMarks.filter((mark) => mark > 75);
    console.log("\nMarks greater than 75 (filter):", above75);

    const total = bonusMarks.reduce((sum, mark) => sum + mark, 0);
    console.log("\nTotal marks (reduce):", total);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("\nExecution completed.");
  }
}
const studentMarks = [68, 74, 81, 59, 77];
processStudentMarks(studentMarks);
