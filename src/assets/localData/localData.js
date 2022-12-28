const radioData = ["A", "B", "C", 'D']
const objOfForm = [
    { name: 'name', title: 'Name', type: 'text', register: 'firstname', settings: { minLength: { value: 3, message: 'должно быть больше 3 символов' } } },
    { name: 'surname', title: 'Surname', type: 'text', register: 'lastname', settings: { minLength: { value: 3, message: 'должно быть больше 3 символов' }, } },
    { name: 'age', title: 'Age', type: 'number', register: 'age', settings: { min: { value: 6, message: 'минимальное значение 6' }, } },
    { name: 'group', title: 'Group', type: 'radio', register: 'group', elements: radioData, settings: {} },
    { name: 'class', title: 'Class', type: 'number', register: 'classes', settings: { min: { value: 1, message: 'минимальное значение 1' }, max: { value: 11, message: 'максимальное значение 11' }, } },
    {
        name: 'photo', title: "Photo", type: 'text', register: 'image', settings: {
            pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                message: 'Invalid URL'
            }
        }
    },
]


export { radioData, objOfForm }