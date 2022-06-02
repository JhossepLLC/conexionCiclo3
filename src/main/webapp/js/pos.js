jQuery(function () {
    $(document).ready(function () {
        listar();
        function listar() {
            $.get("post", {"opc": 1}, function (data) {
                var x = JSON.parse(data);
                $("#tablita tbody tr").remove();
                for (var i = 0; i < x.length; i++) {
                    $("#tablita").append(
                            "<tr><td>" + (i + 1) + "</td><td>" + x[i].idpost + "</td><td>" + x[i].titulo
                            + "</td><td>" + x[i].descripcion + "</td><td><a href='#' onclick='editar("
                            + x[i].idpost + ")'><i class='fa-solid fa-pen-to-square yelow'></i></a></td><td><a href='#' onclick='eliminar(" + x[i].idpost + ")'><i class='fa-solid fa-trash-can red'></i></a></td></tr>");
                }
            });
        }
        $("#guardar").click(function () {
            var titulo = $("#titulo").val();
            var desc = $("#descripcion").val();
            $.post("post", {"titulo": titulo, "desc": desc, "opc": 2}, function () {
                bootbox.alert({
                    message: "Registro guardado correctamente...!",
                    callback: function () {
                        console.log('This was logged in the callback!');
                    }
                });
                limpiar();
                listar();
            });
            $("#modalGuardar").modal('hide');
        });
        function editar(id) {
            $.get("post", {"id": id, "opc": 4}, function (data) {
                var w = JSON.parse(data);
                $("#editar_titulo").val(w.titulo);
                $("#editar_descripcion").val(w.descripcion);
                $("#idpost").val(w.idpost);
            });
            $("#modalEditar").modal('show');
        }
        function eliminar(id) {

            bootbox.confirm({
                message: "Realmente desea Eliminar?",
                buttons: {
                    confirm: {
                        label: 'SI',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'NO',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    if (result) {
                        $.get("post", {"id": id, "opc": 3}, function () {
                            bootbox.alert({
                                message: "Registro eliminado correctamente...!",
                                callback: function () {
                                    console.log('This was logged in the callback!');
                                }
                            });
                            listar();
                        });

                    } else {
                        bootbox.alert({
                            message: "Registro no eliminado!",
                            size: 'small'
                        });
                    }
                }
            });
        }
        $("#modificar").click(function () {
            var titulo = $("#editar_titulo").val();
            var desc = $("#editar_descripcion").val();
            var id = $("#idpost").val();
            bootbox.confirm({
                message: "Realmente desea Modificar?",
                buttons: {
                    confirm: {
                        label: 'SI',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'NO',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    if (result) {
                        $.post("post", {"id": id, "titulo": titulo, "desc": desc, "opc": 5}, function () {
                            bootbox.alert({
                                message: "Registro Modificado correctamente...!",
                                callback: function () {
                                    console.log('This was logged in the callback!');
                                }
                            });
                            limpiar();
                            listar();
                        });
                        $("#modalEditar").modal('hide');
                    } else {
                        bootbox.alert({
                            message: "Registro no Modificado!",
                            size: 'small'
                        });
                    }
                }
            });
        });

        function limpiar() {
            $("#titulo").val("");
            $("#descripcion").val("");
        }
    });
});
