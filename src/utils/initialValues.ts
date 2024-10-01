import { FormTemplate } from "./FormInterfaces"


const initialResponses = (id: string, chapter: string, qFather: string, idOptResponse: string): FormTemplate => ({
    qId: id,
    surveyId: "2",
    chapterId: chapter,
    qFather: qFather ,
    response: [
        {
            idoptresponse: idOptResponse,
            responseuser: [""],
            subQuestion3Responses: undefined,
            subQuestion1Responses: undefined,
            subQuestion2Responses: undefined,
            subQuestions: [],
            additionalText: ""
        }
    ]
});

export const getInitialValuesPage1 = () => {
    return {
        P1: initialResponses("P1","1","","1"),
        P2: initialResponses("P2","1","","2"),
        P3: initialResponses("P3","1","","3"),
        P4: initialResponses("P4","1","","4"),
        P5: initialResponses("P5","1","","5"),
        P6: initialResponses("P5","1","","6"),
    }
}

export const getInitialValuesPage2 = () => {
    return {
        P7: initialResponses("P7","1","","7"),
        P8: initialResponses("P8","1","","8"),
        P9: initialResponses("P9","1","","9"),
        P10: initialResponses("P10","1","","10"),
        P11: initialResponses("P11","1","10","11"),
        P12: initialResponses("P12","1","","12"),
    }
}

export const getInitialValuesPage3 = () => {
    return {
        P13: initialResponses("P13","1","","13"),
        P14: initialResponses("P14","1","","14"),


    }

    
}

export const getInitialValuesPage4 = () => {
    return {
        P15: initialResponses("P15","2","","15"),
        P16: initialResponses("P16","2","","16"),
        P17: initialResponses("P17","2","","17"),
        P18: initialResponses("P18","2","","18"),
        P19: initialResponses("P19","2","","19"),
        
    }

    
}
export const getInitialValuesPage5 = () => {
    return {
        P20: initialResponses("P20","2","","20"),
        P21: initialResponses("P21","2","","21"),
        
    }

    
}

export const getInitialValuesPage6 = () => {
    return {
        P18a: initialResponses("P18a","5","","18"),
        P18b: initialResponses("P18b","5","","18"),
        P18c: initialResponses("P18c","5","","18"),
        P18d: initialResponses("P18d","5","","18"),
        P18e: initialResponses("P18e","5","","18"),
        P18f: initialResponses("P18f","5","","18"),
        P18g: initialResponses("P18g","5","","18"),
        P18h: initialResponses("P18h","5","","18"),
        P18i: initialResponses("P18i","5","","18"),
        P18j: initialResponses("P18j","5","","18"),
        P18k: initialResponses("P18k","5","","18"),
        P18l: initialResponses("P18l","5","","18"),
        P18m: initialResponses("P18m","5","","18"),
        P18n: initialResponses("P18n","5","","18"),
        P18o: initialResponses("P18o","5","","18"),
    }

}

export const getInitialValuesPage9 = () => {
    return {
        P24: initialResponses("P24","5","","24"),
        P27: initialResponses("P27","5","","27"),
        P28: initialResponses("P28","5","","28"),
        P29: initialResponses("P29","5","","29"),
    }

}

export const getInitialValuesPage10 = () => {
    return {
        A1: initialResponses("A1","A","","A1"),
        A2: initialResponses("A2","A","","A2"),
        A3: initialResponses("A3","A","","A3"),
        A4: initialResponses("A4","A","","A4"),
        A5: initialResponses("A5","A","","A5"),

    }

}