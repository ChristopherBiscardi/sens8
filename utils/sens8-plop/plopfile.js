module.exports = function(plop) {
  console.log("plop");
  // create your generators here
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [], // array of inquirer prompts
    actions: [] // array of actions
  });
};
