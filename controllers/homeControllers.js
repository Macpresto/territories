const { default: axios } = require("axios");

const home_page = (req, res) => {
    res.render('index', { title : 'Home' });
};

const get_territories = () => {
return axios.get('https://netzwelt-devtest.azurewebsites.net/Territories/All')
    .then(response => {
    const territoriesArray = Object.values(response.data);
    return territoriesArray.flat(1).sort((a, b) => a.id.localeCompare(b.id));
    })
    .catch(err => {
    console.log(err);
    });
}
// Define a recursive function to build a nested HTML list representing a tree
const buildTree = (data, parentId = null) => {
        
const result = [];
// Filter the data array to find nodes with parent equal to the specified parentId
for (const node of data.filter(node => node.parent === parentId)) {
    // Recursively build the subtree rooted at the current node
    const children = buildTree(data, node.id);
    // Generate an HTML list item for the current node, with its children as a nested list
    if (children.length) {
    result.push(`<li><span class="caret">${node.name}</span><ul class="nested">${children.join('')}</ul></li>`);
    } else {
    // Generate an HTML list item for the current node with no children
    result.push(`<li>${node.name}</li>`);
    }
}
return result;
};

const list_territories = (req, res) => {
// Call the get_territories function to fetch the data
get_territories()
    .then(sortedArray => {
    // Generate the HTML for the nested list using the buildTree function and the fetched data
    const html = `
        <ul id="myUL">
        ${buildTree(sortedArray, null).join('')}
        </ul>
    `;
    console.log(html);
    // Pass the generated HTML to the view template
    res.render('index', { title: 'Home', territories: html });
    })
    .catch(err => {
    console.log(err);
    });
};



module.exports = {
    home_page,
    list_territories
}