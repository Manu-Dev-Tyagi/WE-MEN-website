import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

interface Answer {
  height: string;
  weight: string;
  chest: string;
  concern: string;
}

const steps = [
  {
    question: "What's your height?",
    key: "height" as const,
    options: ["Under 5'6\"", "5'6\" - 5'9\"", "5'10\" - 6'0\"", "Above 6'0\""],
  },
  {
    question: "What's your weight?",
    key: "weight" as const,
    options: ["Under 65 kg", "65 - 80 kg", "80 - 95 kg", "Above 95 kg"],
  },
  {
    question: "What's your chest size?",
    key: "chest" as const,
    options: ["36-38 inches", "38-40 inches", "40-42 inches", "42+ inches"],
  },
  {
    question: "What's your primary concern?",
    key: "concern" as const,
    options: ["Tummy/Belly area", "Chest shaping", "Love handles/Waist", "Sweat control", "Full body shaping"],
  },
];

const getRecommendation = (answers: Answer) => {
  const concernMap: Record<string, string> = {
    "Tummy/Belly area": "we-tuck",
    "Chest shaping": "we-press",
    "Love handles/Waist": "we-handle",
    "Sweat control": "we-sweat",
    "Full body shaping": "we-suit",
  };

  const productId = concernMap[answers.concern] || "we-suit";
  const product = products.find((p) => p.id === productId)!;

  // Size recommendation
  let size = "L";
  const weightIdx = steps[1].options.indexOf(answers.weight);
  const chestIdx = steps[2].options.indexOf(answers.chest);
  const avg = (weightIdx + chestIdx) / 2;
  if (avg < 1) size = "S";
  else if (avg < 1.5) size = "M";
  else if (avg < 2.5) size = "L";
  else if (avg < 3) size = "XL";
  else size = "XXL";

  return { product, size };
};

const SizeQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>({ height: "", weight: "", chest: "", concern: "" });
  const [showResult, setShowResult] = useState(false);

  const current = steps[step];

  const handleSelect = (option: string) => {
    const updated = { ...answers, [current.key]: option };
    setAnswers(updated);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const result = showResult ? getRecommendation(answers) : null;

  return (
    <main className="pb-24 md:pb-12">
      <div className="container max-w-2xl py-12">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">Find Your Perfect Fit</h1>
          <p className="mt-2 text-muted-foreground">Answer 4 quick questions and we'll recommend the best product and size for you</p>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="mt-10"
            >
              {/* Progress */}
              <div className="mb-8 flex gap-2">
                {steps.map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted"}`} />
                ))}
              </div>

              <h2 className="text-center font-display text-xl font-semibold">{current.question}</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`rounded-xl border p-4 text-left font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md ${
                      answers[current.key] === option ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <Button variant="ghost" className="mt-4" onClick={() => setStep(step - 1)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              )}
            </motion.div>
          ) : result ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">Your Perfect Match!</h2>
              <div className="mx-auto mt-6 max-w-sm rounded-xl border bg-card p-6">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                  <img src={result.product.images[0]} alt={result.product.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{result.product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{result.product.shortDescription}</p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="font-price text-2xl font-bold">₹{result.product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{result.product.mrp}</span>
                </div>
                <div className="mt-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  Recommended Size: {result.size}
                </div>
                <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-accent">
                  <Link to={`/product/${result.product.slug}`}>View Product <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <Button variant="outline" className="mt-4" onClick={() => { setShowResult(false); setStep(0); setAnswers({ height: "", weight: "", chest: "", concern: "" }); }}>
                Retake Quiz
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default SizeQuiz;
