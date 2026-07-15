function processStudentMarks(marks) {
  try {
    if (!Array.isArray(marks) || marks.length !== 5) throw new Error("Input must be an array of exactly 5 marks.");
    if (!marks.every((m) => typeof m === "number" && !isNaN(m))) throw new Error("All marks must be valid numbers.");

    const bonusMarks = marks.map((mark) => mark + 5);
    const above75 = bonusMarks.filter((mark) => mark > 75);
    const total = bonusMarks.reduce((sum, mark) => sum + mark, 0);

    console.log("Original marks:", marks);
    console.log("Bonus marks:", bonusMarks);
    console.log("Marks > 75:", above75);
    console.log("Total:", total);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Execution completed.");
  }
}

processStudentMarks([68, 74, 81, 59, 77]);
