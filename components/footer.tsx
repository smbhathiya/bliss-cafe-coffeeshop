"use client";
import React from "react";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandFacebook,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer>
      <div className="absolute inset-0 " />
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <div className=" rounded-lg py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Café Info */}
            <div>
              <h3 className="text-2xl text-neutral-100 mb-4">Bliss Café</h3>
              <p className="text-base text-neutral-200 text-justify">
                A cozy haven for coffee lovers, where passion for coffee meets a
                warm ambiance. Join us for a delightful experience.
              </p>
            </div>
            {/* Hours */}
            <div>
              <h3 className="text-2xl text-neutral-100 mb-4">Hours</h3>
              <p className="text-base text-neutral-200 text-justify">
                <span className="font-bold">Mon-Fri:</span> 7 AM - 7 PM
                <br />
                <span className="font-bold">Sat-Sun:</span> 8 AM - 6 PM
              </p>
            </div>
            {/* Connect */}
            <div>
              <h3 className="text-2xl text-neutral-100 mb-4">
                Connect With Us
              </h3>
              <p className="text-base text-neutral-200 mb-4 text-justify">
                Follow us for updates and coffee inspiration.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-amber-800 transition-colors"
                >
                  <IconBrandInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-amber-800 transition-colors"
                >
                  <IconBrandTwitter size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-amber-800 transition-colors"
                >
                  <IconBrandFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
            <p className="text-base text-neutral-200">
              &copy; {new Date().getFullYear()} Bliss Café. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
