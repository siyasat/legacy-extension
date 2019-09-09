$(document).ready(()=>{
});

$("#loginButton").click(()=>{

    ui.input.disable();
    var u = $("#username").val();
    var p = $("#password").val();

    if(!u){
        ui.message.show("Username is Required");
        ui.input.enable();
    } else {
        if(!p){
            ui.message.show("Password is Required");
            ui.input.enable();
        } else {
            $.ajax({
                type:"POST",
                url:data.url.login,
                data: {
                    username: u,
                    password: p
                }

            }).fail((error)=>{
                ui.message.show("Please check your connection");
                console.error({from:"Login Submission", content:error});
            });

        }
    }
});