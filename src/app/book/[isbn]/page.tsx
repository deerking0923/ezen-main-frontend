import LibraryAddButton from "../../components/LibraryAddButton";
import BookReviewSection from "../../components/BookReviewSection";
import "./bookDetail.css";

// Next.js 15에서는 params를 반드시 await 처리하여 사용해야 함
interface Props {
  params: Promise<{ isbn: string }>;
}

export default async function BookDetailPage({ params }: Props) {
  const { isbn } = await params; // 반드시 await로 params 처리

  const res = await fetch(
    `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(
      isbn
    )}&display=1`,
    {
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID || "",
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET || "",
      },
    }
  );

  if (!res.ok) {
    return (
      <div>
        API 요청 실패: {res.status} {res.statusText}
      </div>
    );
  }

  const data = await res.json();
  const book = data.items && data.items[0];
  if (!book) {
    return <div>해당 도서를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="book-detail-container">
      <div className="detail-topbar">
        <LibraryAddButton
          isbn={isbn}
          title={book.title}
          author={book.author}
          publisher={book.publisher}
          thumbnail={book.image}
        />
      </div>

      <div className="book-detail">
        <div className="book-image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-description">
            <strong>소개</strong>
            <p>{book.description}</p>
          </div>
        </div>
      </div>

      <div className="book-additional-info">
        <p className="book-author">
          <strong>저자:</strong> {book.author}
        </p>
        <p className="book-publisher">
          <strong>출판사:</strong> {book.publisher}
        </p>
        <p className="book-isbn">
          <strong>ISBN:</strong> {isbn}
        </p>
        <p className="book-pubdate">
          <strong>출판일:</strong> {book.pubdate}
        </p>
      </div>

      <BookReviewSection isbn={isbn} />
    </div>
  );
}