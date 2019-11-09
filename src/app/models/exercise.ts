import { IUser } from "./user";
import { ICourse } from "./course";

export interface IExercise {
    id: string;
    name: string;
    content: string;
    initialCode: string;
    author: IUser;
    course: ICourse;
}

export interface IExerciseDetails {
    id: string;
    name: string;
    content: string;
    initialCode: string;
    author: IUser;
    course: ICourse;
    programmingLanguage: string;
    correctnessTests: ICorrectnessTest[];
}

export interface IExercise {
    id: string;
    name: string;
    content: string;
    initialCode: string;
    author: IUser;
    course: {
        id: string;
        name: string;
    }
}

export interface ICorrectnessTest {
    inputs: string[];
    outputs: string[];
}


export interface IAddExerciseFormValues2 {
    id: string;
    name: string;
    content: string;
    initialCode: string;
    course: {
        id: string;
    }
    programmingLanguage: string;
    input1: string;
    output1: string;
    input2: string;
    output2: string;
    input3: string;
    output3: string;
}

export interface IAddExerciseFormValues {
    id: string;
    name: string;
    content: string;
    initialCode: string;
    course: {
        id: string;
    }
    programmingLanguage: string;
    correctnessTests: ICorrectnessTest[]
}

export const convertValues = (values: IAddExerciseFormValues2) => {
    var inputs1 = values.input1.split('\n');
    var inputs2 = values.input2.split('\n');
    var inputs3 = values.input3.split('\n');

    var outputs1 = values.output1.split('\n');
    var outputs2 = values.output2.split('\n');
    var outputs3 = values.output3.split('\n');
    const correctnessTests: ICorrectnessTest[] = [
        {
            inputs: inputs1,
            outputs: outputs1,
        },
        {
            inputs: inputs2,
            outputs: outputs2,
        },
        {
            inputs: inputs3,
            outputs: outputs3,
        },
    ]

    return {
        id: values.id,
        content: values.content,
        course: values.course,
        initialCode: values.initialCode,
        name: values.name,
        programmingLanguage: values.programmingLanguage,
        correctnessTests: correctnessTests,
    }
}