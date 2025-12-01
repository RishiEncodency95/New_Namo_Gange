import React from "react";

const Support = () => {
  return (
    <section className="relative py-4 md:py-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Header */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 text-center">
          <span className="bg-gradient-to-r from-[#f36b2a] to-[#1e7ed3] bg-clip-text text-transparent">
            {" "}
            Join the Mission
          </span>
        </h2>
        <div className="flex justify-center w-full mb-6">
          <div
            className="
      w-full 
      py-6
      relative 
      overflow-hidden
      text-center
    "
          >
            {/* Decorative Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DF562C] via-[#f89a36] to-[#1e7ed3]" />

            <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-normal mb-3">
              Each milestone we achieve brings us closer to a more
              compassionate, environmentally balanced society. Our programs are
              growing thanks to the dedication of volunteers, partners, and
              supporters who believe in positive change. As we expand, we remain
              committed to empowering communities through education, healthcare,
              spiritual development, and environmental conservation. Guided by
              integrity and transparency, we strive to build a future that
              inspires hope, unity and lasting transformation — nurturing
              meaningful progress for generations to come. Your support helps us
              innovate, stay inclusive, and scale sustainable solutions for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
