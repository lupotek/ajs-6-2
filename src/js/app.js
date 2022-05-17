export default function extracting(obj) {
  const { special } = obj;
  const resultArr = [];
  special.forEach((el) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = el;
    resultArr.push({
      id, name, icon, description,
    });
  });
  return resultArr;
}

