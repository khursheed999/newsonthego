export const varients={
    initial:{opacity:0,
      y:100,
    },
    whileInView:{opacity:[0,.3,0.5,0.7,0.8,.9,1],
      y:[200,150,100,50,25,12,6,3,2,1,0],
      
    },
    transition:{
      duration:3,
      ease:'linear',
    },
    viewport:{once:true}
  }
  export const dataAnimation={
    initial:{opacity:0,
      x:100,
    },
    whileInView:{opacity:[0,.3,0.5,0.7,0.8,.9,1],
      x:[200,150,100,50,25,12,6,3,2,1,0],
      
    },
    transition:{
      duration:3,
      ease:'linear',
    },
    viewport:{once:true}
  }
  export const buttonAnimation={
    initial:{
      scale:1,
      rotateZ:0,
    },
    whileInView:{
      scale:[1,1.001,1.01,1.1,1.12,1.13,1.14,1.15,1.16,1.17,1.18,1.19,],
      rotateZ:[1,2,3,4,5,6,7,8,9,10,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1],

      
    },
    transition:{
      duration:5,
      repeat:Infinity,
      ease:'linear',
    },
    exit:{
        duration:5,
    }
    
  }