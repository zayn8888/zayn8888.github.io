
function init(){

    getCourses()
        .then(courses => {
            let getCourses = courses.courses.courses;

            let html ='';


            // ForEach to iterate all the course from the .json file
            getCourses.forEach( course => {

                // Html Templete


                html += `
                <div class="course-card">
                <div class="list-view-card">
                    <a href="${course.linkToCourse}" data-id=${course.id}>
                        <div class="list-view-course-container">
                            <div class="course-img">
                                <img src=${course.img} alt="">
                            </div>
                            <div class="course-content">
                                <div class="course-title">
                                    <h4>${course.title}</h4>
                                </div>
                                <div class="course-meta">
                                    <div class="course-meta-with">
                                        <span>${course.lectures} lectures</span>
                                        <span>${course.hours}</span>
                                        <span>${course.level}</span>
                                    </div>
                                </div>
                                <div class="headline-instructor">
                                    <span>${course.description}</span> | <span>By Brad Traversy</span>
                                </div>
                                <div class="price">
                                    <h2>$${course.price}</h2>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
                `
            })

            document.querySelector('.coursesSection').innerHTML = html;
            

        })
}

// Async /Await to get data from the file
async function getCourses(){

    const response = await fetch("./js/courses.json");
     const courses = await response.json();
     
    return {
        courses
    }
}

init()