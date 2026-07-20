'use client';

import { useState } from "react";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | undefined>();

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-rose-700">
              CloudCommerce
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your products with ease.
            </p>
          </div>

          <button
            onClick={() => {
              setProductToEdit(undefined);
              setShowModal(true);
            }}
            className="rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow-md transition hover:bg-rose-700"
          >
            + Create Product
          </button>
        </div>

        {/* Product Grid */}
        <ProductList
          onEdit={(product) => {
            setProductToEdit(product);
            setShowModal(true);
          }}
        />

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="w-[450px] rounded-2xl border border-amber-200 bg-white p-6 shadow-2xl">

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold text-rose-700">
                  {productToEdit ? "Edit Product" : "Create Product"}
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-2xl font-bold text-gray-400 hover:text-red-500"
                >
                  ×
                </button>

              </div>

              <ProductForm
                productToEdit={productToEdit}
                onClose={() => setShowModal(false)}
              />

            </div>

          </div>
        )}

      </div>
    </main>
  );
}