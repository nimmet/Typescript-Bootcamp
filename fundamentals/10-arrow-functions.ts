

function saveCourse(course, callback:Function){

    setTimeout( () => {
        callback("success");
    },1000);
}

saveCourse({title:"Java Spring"},
     () => {
    console.log("Save successful.");
    });

