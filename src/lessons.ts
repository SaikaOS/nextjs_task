export type DataType = {
    task: string
    id: number,
    userAttempts: number
}

export const data: DataType[] = [
    {
        task: 'В этом задании вам нужно вычислить сумму всех четных чисел, встречающихся в ряду от 1 до числа (включительно), передаваемого в нашу функцию (переменная "а").',
        id: 0,
        userAttempts: 0
    },
    {
        task: 'В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции их суммарную длину',
        id: 1,
        userAttempts: 0
    },
    {
        task: 'В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции строку, которая будет включать в себя обе этих строки, преобразовав в первой строке все буквы в заглавные, а во второй - в строчные.',
        id: 2,
        userAttempts: 0
    },
]