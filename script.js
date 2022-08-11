
((d)=>{
    const $form=d.querySelector(".form"),
    $inputs=d.querySelectorAll(".form [required]"),
    $name=d.querySelector(".name"),
    $number=d.querySelector(".number"),
    $date=d.querySelector(".date"),
    $pin=d.querySelector(".pin"),
    $complete=d.querySelector(".complete");
    // console.log($inputs)
    $inputs.forEach(input=>{
        if(input.title!=""){
            const $span=d.createElement("span");
            $span.id=input.name;
            $span.textContent=input.title;
            $span.classList.add("form-error", "none")
            input.insertAdjacentElement("afterend",$span);
        }
    });

    d.addEventListener("keyup",e=>{
        if(e.target.id === "Name"){
            $name.innerHTML=e.target.value;
        } else if(e.target.id === "Number"){
            $number.innerHTML=e.target.value;
        } else if(e.target.id === "Month"){
            let $Month= d.getElementById("Month"),
            $Year=d.getElementById("Year");
            $date.innerHTML=`${$Month.value}/${$Year.value}`
        } else if(e.target.id === "Year"){
            let $Month= d.getElementById("Month"),
            $Year=d.getElementById("Year");
            $date.innerHTML=`${$Month.value}/${$Year.value}`
        } else if(e.target.id === "Cvc"){
            $pin.innerHTML=e.target.value;
        }

        if(e.target.matches(".form [required]")){
            let $input=e.target,
            pattern=$input.pattern || $input.dataset.pattern;
        
            if(pattern && $input!==""){
                let regex=new RegExp(pattern);
                return !regex.exec($input.value)
                    ?(d.getElementById($input.name).classList.add("is-active"), $form.classList.add("err"))
                    :(d.getElementById($input.name).classList.remove("is-active"), $form.classList.remove("err"))
            }
            if(!pattern){
                if($input.name=="YearI" ||$input.name=="MonthI") $input.name="CvcI"
                return $input.value===""
                ?(d.getElementById($input.name).classList.add("is-active"), $form.classList.add("err"))
                :(d.getElementById($input.name).classList.remove("is-active"), $form.classList.remove("err"))
            }

        }
    });

    d.addEventListener("submit",(e)=>{
        e.preventDefault();
        $form.classList.toggle("none");
        $complete.classList.toggle("none");
    });

})(document);