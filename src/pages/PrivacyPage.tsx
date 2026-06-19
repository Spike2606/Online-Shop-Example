import { Link } from "react-router-dom";
import { SectionLabel } from "../components/SectionLabel";

export function PrivacyPage() {
  return (
    <section className="section page-section legal-page">
      <SectionLabel>Dokumenty</SectionLabel>
      <h1>Polityka prywatności</h1>
      <p className="legal-page__intro">
        To przykładowa treść polityki prywatności dla sklepu demonstracyjnego.
        Przed publikacją produkcyjną należy dopasować ją do realnego procesu
        sprzedaży oraz skonsultować z prawnikiem.
      </p>

      <article className="legal-card">
        <h2>Administrator danych</h2>
        <p>
          Administratorem danych jest BlueCase Studio Sp. z o.o., ul. Błękitna
          12, 00-001 Warszawa. Kontakt z administratorem jest możliwy pod
          adresem jantomczyk2606@gmail.com.
        </p>

        <h2>Zakres przetwarzanych danych</h2>
        <p>
          Sklep może przetwarzać imię, adres email, numer telefonu oraz dane
          dotyczące zamówienia. Dane są używane do obsługi zapytań, realizacji
          zamówienia i kontaktu z klientem.
        </p>

        <h2>Podstawa i czas przechowywania</h2>
        <p>
          Dane są przetwarzane na potrzeby realizacji umowy lub odpowiedzi na
          zapytanie. Dane mogą być przechowywane przez okres wymagany przepisami
          prawa albo do czasu zakończenia korespondencji.
        </p>

        <h2>Prawa użytkownika</h2>
        <p>
          Użytkownik ma prawo dostępu do danych, poprawiania, usunięcia,
          ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
          sprzeciwu.
        </p>

        <h2>Pliki cookies</h2>
        <p>
          Sklep demonstracyjny może wykorzystywać localStorage do zapamiętania
          zawartości koszyka. Mechanizm nie służy do profilowania użytkownika.
        </p>
      </article>

      <Link className="button ghost" to="/">
        Wróć do sklepu
      </Link>
    </section>
  );
}
