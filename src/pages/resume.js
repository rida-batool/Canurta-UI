import resume from '../resume.pdf'

const Resume = ()=>{


    if (typeof window !== `undefined`){ 
        window.open(resume, "_self");
  }
   

    return null;
}

export default Resume;