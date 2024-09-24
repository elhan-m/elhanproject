
import img from './img.webp'


const App = () => {
  return (
    <div >
      <h1>Резюме</h1>
      <div>
        <h2>ФИО:</h2>
        <img src="https://blog.okko.tv/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2023/09/01/08/6123633/2ae6d9b8785054b1869e7a3242ad9440033d9fbf.jpg" alt="Profile" className="profile-pic" />
        <img src="/shrect.webp" alt="" className="profile-pic" />
      </div>
      <div>
        <p><strong>Туулган жылы:</strong> 1990</p>
        <p><strong>Кыскача маалымат:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias culpa dolorem officia.</p>
        <p><strong>Тилдер:</strong> Кыргызча, Русский</p>
        <p><strong>Кызыгуу:</strong> Программирование, Чтение</p>
        <p><strong>Контакт:</strong> 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>, 
          <a href="mailto:example@example.com"> E-mail</a>, 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>
        </p>
        
      </div>
    </div>
  );
}

export default App;
