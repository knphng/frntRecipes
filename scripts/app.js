var url = "http://bckRecipes/";
var index_container = document.getElementById('index_container');
var page_header = document.getElementById('page-header');
var table_recipes = document.getElementById('table-recipes');
var tbody_recipes = document.getElementById('tbody-recipes');
var table_folders = document.getElementById('table-folders');
var tbody_folders = document.getElementById('tbody-folders');
var recipe_details = document.getElementById('recipe-details');
var cookingTime = document.getElementById('cookingTime');
var ingredients = document.getElementById('ingredients');
var txtRecipe = document.getElementById('recipe');
var folder = document.getElementById('folder');
//GET RECIPES
var xhr = new XMLHttpRequest();
xhr.open("GET", url+"recipes", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState< 4) { return; }
    var table = document.getElementById('table-recipes');
    var recipes = JSON.parse(xhr.responseText);
    console.log(recipes);
    page_header.innerHTML = "Recipes";
    for (var i = 0; i < recipes.length; i++) {
        var row = table.insertRow(i);
        var cell = row.insertCell(0);
        cell.setAttribute('id', recipes[i].id)
        cell.innerHTML = recipes[i].name;
    }
}
xhr.send();


//GET RECIPE DETAILS
document.getElementById('tbody-recipes').addEventListener('click', e => {
    getRecipeDetails(e);
});

//GET FOLDERS
document.getElementById('getFolders').addEventListener('click', e => {
    getFoldersList(e);
});

//GET FOLDER DETAILS
document.getElementById('tbody-folders').addEventListener('click', e => {
    getFolderDetails(e);
});

function getRecipeDetails(e) {
    var xhr = new XMLHttpRequest();
    var id = e.target.id;
    xhr.open("GET", url+"details/"+id, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var recipe = JSON.parse(xhr.responseText);
            page_header.innerHTML = recipe.name;
            table_recipes.setAttribute('hidden', true);
            recipe_details.removeAttribute('hidden');
            cookingTime.innerHTML = recipe.cooking_time;
            ingredients.innerHTML = recipe.ingredients;
            txtRecipe.innerHTML = recipe.txt_recipe;
        }
    }
    xhr.send();
}

function getFoldersList(e) {
    var xhr = new XMLHttpRequest();
    var id = e.target.id;
    xhr.open("GET", url+"folders", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState< 4) { return; }
        table_recipes.setAttribute('hidden', true);
        var table = document.getElementById('table-folders');
        var folders = JSON.parse(xhr.responseText);
        page_header.innerHTML = "Folders";
        for (var i = 0; i < folders.length; i++) {
            var row = table.insertRow(i);
            var cell = row.insertCell(0);
            cell.setAttribute('id', folders[i].id)
            cell.innerHTML = folders[i].name;
        }
    }
    xhr.send();
}

function getFolderDetails(e) {
    var xhr = new XMLHttpRequest();
    var id = e.target.id;
    xhr.open("GET", url+"folder/details/"+id, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var folder = JSON.parse(xhr.responseText);
            page_header.innerHTML = folder.name;

            table_folders.setAttribute('hidden', true);
            var new_tbody = document.createElement('tbody');
            tbody_recipes.parentNode.replaceChild(new_tbody, tbody_recipes);
            new_tbody.setAttribute("id", "tbody-recipes");
            table_recipes.removeAttribute('hidden');
            //folder_details.removeAttribute('hidden');
            var recipes = folder.recipes;
            for (var i = 0; i < recipes.length; i++) {
                var row = table_recipes.insertRow(i);
                var cell = row.insertCell(0);
                row.setAttribute('id', recipes[i].id)
                cell.innerHTML = recipes[i].name;
            }
        }
    }
    xhr.send();
}
