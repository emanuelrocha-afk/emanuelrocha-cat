/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const InteractivePhrase = ({ phrase, imageSrc, text }: { phrase: string, imageSrc?: string, text: string }) => (
  <span className="interactive-phrase">
    {phrase}
    <span className="reveal-content">
      {imageSrc && <img alt={phrase} src={imageSrc} referrerPolicy="no-referrer" />}
      <span className="reveal-content-text">{text}</span>
    </span>
  </span>
);

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col selection:bg-orange-100/50">
      <main className="flex flex-1 flex-col items-center px-8 py-20 lg:py-32">
        <div className="reading-width w-full flex flex-col">
          <header className="flex flex-col mb-24 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-ink-charcoal font-sans-clean text-[10px] tracking-[0.4em] uppercase font-light">
                E. M. <span className="mx-3 opacity-20">/</span> Studio
              </div>
              <p className="text-soft-slate text-[9px] uppercase tracking-[0.4em] font-sans-clean">
                Autumn 2024
              </p>
            </div>
          </header>
          
          <article className="flex flex-col">
            <h1 className="font-serif-accent text-ink-charcoal text-4xl md:text-5xl font-medium italic mb-12 leading-tight">
              A Note on Intention
            </h1>
            
            <div className="flex flex-col space-y-8 font-serif-accent text-lg md:text-xl leading-[1.8] font-[450] opacity-95">
              <p>
                In an era of rapid transition, I find myself returning to the foundational principles that have long defined our collective path. This reflection is not a report, but a{' '}
                <InteractivePhrase 
                  phrase="conversation"
                  imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCn_e8kwhukeduoy70O8W-QziYcGJivpp26R6Cur3jMGP_l0bJDlr4yd8HsWaIs3m-BOhNMTxjaAUic7vAfQU6bFIU_ogr4fMRE_PHjFSog6hiMr1Z3GU3zB0-PAe69ATwuj1J0LybHQc19FaXu7BlcXf1LCR32BXATStH-uyFTG_hU9x6RPsuD2AEPNkxRz1VOGMD3AppLDOtO8zYjQ3IQkJf2tngAkz4fsmQURtqc35CsYtSCVHGeljRIV6PNfG1ukhTa7noFmeCV"
                  text="A dialogue held in the quiet spaces between expectations and reality."
                />
                —a quiet look at the resolve that guides us forward through the complexities of our shared journey.
              </p>
              
              <p>
                The narrative of progress is often written in the margins of everyday persistence. It is not merely about the milestones we achieve, but the{' '}
                <InteractivePhrase 
                  phrase="integrity"
                  text='"True silence is the rest of the mind, and is to the spirit what sleep is to the body."'
                />
                {' '}with which we pursue them. My focus remains steadfast on the long-term horizon, prioritizing substance over spectacle and enduring value over transient trends. Clarity of purpose remains, perhaps, our greatest asset.
              </p>
              
              <p>
                I recognize that the strength of any endeavor lies in its ability to adapt without losing its{' '}
                <InteractivePhrase 
                  phrase="essence"
                  imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCjMH5_Zv7e-w6jIQbJakHOnpaZUJCl2wvMV43C1JKwDe4gRawB9Y2I7V9Rw4tjbb1kjnN_aNnLkbbL2geB0KxJZMwON1Gzf3W1vGGAG_sgYwDROnnt2-uJ30WbEhA4wpZ5gjgI8Q4vuQiE7Em65NUnPpmDFD1O8i-SzyAf9lUk4mt93PBlGUKuH_cOm7f6gGequIt6TWqCg68IdwDBasHXBY1Edp3p_06MKtaOYKT0lL_n3Wy4qHno-13oskGakAOqS6YXeYQFLfOH"
                  text="The core remains unchanged, even as the seasons turn and the landscape shifts."
                />
                . This balance requires constant vigilance and a willingness to engage with the difficult questions that define our age. Through this ongoing dialogue, we continue to refine our positioning, ensuring that our voice remains both relevant and resonant.
              </p>
              
              <p>
                Integrity is not a static destination but a continuous practice. It is found in the rigor of our internal processes and the{' '}
                <InteractivePhrase 
                  phrase="transparency"
                  text="A window is only as clear as the care we take in maintaining its surface."
                />
                {' '}of our external movements. As we look toward the upcoming cycle, the path is not defined by radical shifts, but by the deepening of existing commitments. By reinforcing our core pillars, we create a stable foundation for innovation to emerge organically.
              </p>
              
              <p>
                It is my conviction that the most meaningful contributions are those that withstand the test of time. In a culture of immediacy, I choose to measure success through the lens of{' '}
                <InteractivePhrase 
                  phrase="generational impact"
                  imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCO0rVHDna3QfS-WI0iXexsGvENmiQfSeeNAa3xd8TWTyPvNd1HiV9n3Anu7dgYlkdgAgLACIdwPo85iJU5tZgsOlVoLUNBT7FwEl_Swj7OnBNmUWgTs9HHuaP6SvFl_bCBQy-glozGk2dJmusSdQoL0mB2pxEDURMWgNBhC17t7Ly7XzC65YXxH-wz-BMWwQ0bu1zXONoVP08U7_TYYEK6Necvks4WiRph39wWVkCkIr38t7Zre3cSCgbdkbvreEqqrkdgAhV1Ddsa"
                  text="Planting seeds for shade we may never sit under ourselves."
                />
                . This requires a patience that is increasingly rare, yet more necessary than ever. I am grateful for the continued trust of those who share this long-term perspective.
              </p>
            </div>
            
            <footer className="pt-20 pb-24">
              <div className="flex flex-col space-y-4">
                <p className="font-serif-accent text-lg italic">
                  With gratitude,
                </p>
                <div className="pt-4">
                  <p className="font-signature text-4xl md:text-5xl text-ink-charcoal opacity-80 mb-6 transform -rotate-1 origin-left">
                    Eleanor Thorne
                  </p>
                  <div className="flex flex-col">
                    <p className="text-ink-charcoal font-sans-clean text-sm font-medium tracking-wide">
                      Eleanor Thorne
                    </p>
                    <p className="text-soft-slate font-sans-clean text-[11px] uppercase tracking-[0.2em] mt-1">
                      Founding Director
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </article>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[10px] text-soft-slate uppercase tracking-[0.25em] font-sans-clean pb-12 opacity-60">
            <div className="flex space-x-12">
              <a className="hover:text-ink-charcoal transition-colors duration-500" href="#">Privacy</a>
              <a className="hover:text-ink-charcoal transition-colors duration-500" href="#">Engagement</a>
              <a className="hover:text-ink-charcoal transition-colors duration-500" href="#">Disclosures</a>
            </div>
            <div>
              <p>© 2024 Thorne & Associates</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
