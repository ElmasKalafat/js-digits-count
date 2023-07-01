import "./App.css";
function App() {
  const elmas = (number) => {
    const digits = Array.from(String(number), Number); // sayıyı basamaklarına ayır
    let count = 0;

    digits.forEach((digit) => {
      if (digit !== 0 && number % digit === 0) {
        // rakam 0 a eşşit değilse ve rakama tam bölünüyorsa sayıyı arttır
        count++;
      }
    });

    return count; //döndür
  };

  const numbers = [2684, 1257, 554, 68921, 78521, 123];
  let totalCount = 0;

  numbers.forEach((number) => {
    // verilen sayılar için hesapla ve topla
    const digitCount = elmas(number);
    totalCount += digitCount;
  });

  return (
    <div>
      <h1>Sayıların Rakamlarına Bölünme Sayısı</h1>
      <h1>Toplam: {totalCount}</h1>
    </div>
  );
}

export default App;
