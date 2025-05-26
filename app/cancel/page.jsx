export default function CancelPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-800 p-8">
        <h1 className="text-4xl font-bold mb-4">Paiement annulé</h1>
        <p className="mb-6">Votre paiement a été annulé. Vous pouvez réessayer à tout moment.</p>
        <a href="/panier" className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600">Retour au panier</a>
      </div>
    );
  }
  