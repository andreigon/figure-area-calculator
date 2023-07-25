function clearDataShow(){
    document.getElementById('figure_triangle').style.display='none'
    document.getElementById('figure_square').style.display='none'
    document.getElementById('figure_pentagon').style.display='none'
    document.getElementById('figure_hexagon').style.display='none'
    document.getElementById('figure_heptagon').style.display='none'
    document.getElementById('figure_octagon').style.display='none'
    document.getElementById('data-title').innerHTML=""
}
clearButton.addEventListener('click',clearInput,clearDataShow)

function clearInput(){
    document.getElementById('corners').value=""
    clearDataShow()
    document.getElementById('perimetr').value=""
    
}   

calcButton.addEventListener('click', FindMaxArea,clearDataShow)

function FindMaxArea(perimetr,corners){
    clearDataShow()
    corners=document.getElementById('corners').value
    perimetr=document.getElementById('perimetr').value
    if (perimetr<=0){
        alert("ERROR: Perimetr=Null")
    }else
    if (corners<3 || corners>8){
        console.log('ERROR: Wrong number of corners');
        alert("ERROR: Wrong number of corners. 3 <= Current corners number => 8 ");

    } else if (corners==3){
        //треугольник
        const a = perimetr / 3;
        const area = (Math.sqrt(3)/4)*Math.pow(a,2)
        document.getElementById('data-title').innerHTML=`Максимальная площадь такого треугольника равна `+area
        // console.log(`Максимальная площадь треугольника равна ${area}` )
        document.getElementById('figure_triangle').style.display='block'
    } 
    else if (corners==4){
        //квадрат
         const a = perimetr / 4
         const area = Math.pow(a,2)
         document.getElementById('data-title').innerHTML=`Максимальная площадь такого квадрата равна `+area
        //  console.log(`Максимальная площадь квадрата равна ${area}`)
         document.getElementById('figure_square').style.display='block'
    } else if (corners==5){
        // пятиугольник
        const a = perimetr / 5
        const area = ((5*Math.pow(a,2))/4)*(1/(Math.tan(Math.PI/5)))
        document.getElementById('data-title').innerHTML=`Максимальная площадь такого пятиугольника равна `+area
        // console.log(`Максимальная площадь пятиугольника равна ${area}`);
        document.getElementById('figure_pentagon').style.display='block'
    } else if(corners==6){
        //шестиугольник
        const a = perimetr / 6
        const area=(3*Math.sqrt(3)*Math.pow(a,2))/(2)
        document.getElementById('data-title').innerHTML=`Максимальная площадь такого шестиугольника равна `+area
        // console.log(`Максимальная площадь шестиугольника равна ${area}`);
        document.getElementById('figure_hexagon').style.display='block'
    } else if (corners==7){
        //семиугольник
        const a = perimetr / 7
        const area = ((7*Math.pow(a,2))/4)*(1/(Math.tan(Math.PI/7)))
        document.getElementById('data-title').innerHTML=`Максимальная площадь такого семиугольника равна `+area
        // console.log(`Максимальная площадь семиугольника равна ${area}`);
        document.getElementById('figure_heptagon').style.display='block'
    } else if (corners==8){
        // восьмиугольник
        const a = perimetr / 8
        const area= (2*Math.pow(a,2))*(Math.sqrt(2)+1)
        document.getElementById('data-title').innerHTML=`Максимальная площадь такого восьмиугольника равна `+area
        // console.log(`Максимальная площадь восьмиугольника равна ${area}`)
        document.getElementById('figure_octagon').style.display='block'
    }
}


