let img_arr = [
    {"url" : "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh3_carl?$DWP_PHOTO$" },
    {"url" : "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh4_carl?$DWP_PHOTO$"},
    {"url" : "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh1_carl?$DWP_PHOTO$" },
    {"url" : "https://belk.scene7.com/is/image/Belk/wk09_032723_hp_rl_fh2_carl?$DWP_PHOTO$" },
              
];
console.log(img_arr[0].url)

let start_slide_show = (event,img_arr) =>{
    event.preventDefault();
    let slide_div = document.querySelector("#phla_slider");
    slide_div.innerHTML = null;

    let img1 = document.createElement("img");
    let i = 0;
    img1.src = img_arr[i].url;
    i++;
    if(i == img_arr.length){
        i = 0;
    }
    slide_div.append(img1);
    
    let starts = setInterval(() => {
        // console.log("my",i)
        if(i == img_arr.length){
            i = 0;
        }
        img1.src = img_arr[i].url;
        i++;
        slide_div.append(img1);
       
    },2000)
};

window.addEventListener("load", (event) =>{
    start_slide_show(event,img_arr);
})