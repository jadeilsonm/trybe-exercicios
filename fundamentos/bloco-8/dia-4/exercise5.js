const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) => {
        acc += curr.split('').reduce((accSpl, currSpl) => currSpl === 'a' || currSpl === 'A' ? accSpl += 1: accSpl,0)
        return acc
    },0)
  }
  console.log(containsA());