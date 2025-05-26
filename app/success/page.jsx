export default function SuccessPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-green-800 p-8">
        <h1 className="text-4xl font-bold mb-4">Merci pour votre achat!</h1>
        <p className="mb-6">Votre paiement a été confirmé. Un reçu vous a été envoyé par courriel.</p>
        <a href="/voitures" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">Retour au catalogue</a>
      </div>
    );
  }
  