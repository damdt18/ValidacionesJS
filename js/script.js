function createProduct(event) {
    event.preventDefault(); 
    var nameInput = document.getElementById("name");
    var priceInput = document.getElementById("price");
    var inventoryInput = document.getElementById("inventory");

    var name = nameInput.value;
    var price = priceInput.value;
    var inventory = inventoryInput.value;

    // Limpia errores
    clearErrors();

    // validacion de campos
    var isValid = true;

    if (name.trim() === "") {
        displayError("nameError", "El campo Nombre es obligatorio.");
        isValid = false;
    }

    if (price.trim() === "") {
        displayError("priceError", "El campo Precio es obligatorio.");
        isValid = false;
    }

    if (inventory.trim() === "") {
        displayError("inventoryError", "El campo Inventario es obligatorio.");
        isValid = false;
    }

    if (!isValid) {
        return; 
    }

    // Alerta de exitos
    alert("Producto creado");
   
    // Reinicia el formulario
    document.getElementById("productForm").reset();
}

function displayError(errorId, errorMessage) {
    var errorElement = document.getElementById(errorId);
    errorElement.innerHTML = errorMessage;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerHTML = "";
    }
}
