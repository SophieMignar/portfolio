/* ==========================================================================
   INTERACTIVITÉ DUAL-LENS - PORTFOLIO SOPHIE KEKEMBA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Éléments DOM ---
  const body = document.body;
  const btnLensBA = document.getElementById('btnLensBA');
  const btnLensAudit = document.getElementById('btnLensAudit');
  
  // Éléments de la carte Focus Dynamique
  const lensContent = document.getElementById('lensContent');
  const focusTitle = document.getElementById('focusTitle');
  const focusCompany = document.getElementById('focusCompany');
  const focusDate = document.getElementById('focusDate');
  const focusDesc = document.getElementById('focusDesc');
  const bulletList = document.getElementById('bulletList');
  const projectTagText = document.getElementById('projectTagText');
  const projectTagIcon = document.querySelector('#projectTag svg');
  
  // Éléments du parcours
  const timeBV = document.getElementById('timeBV');
  const timeAnjoy = document.getElementById('timeAnjoy');
  
  // Compétences
  const skillTags = document.querySelectorAll('.tag');
  
  // Téléchargement
  const btnDownloadPrimary = document.getElementById('btnDownloadPrimary');
  const btnDownloadSecondary = document.getElementById('btnDownloadSecondary');

  // --- Base de Données des Deux Angles Professionnels ---
  const data = {
    ba: {
      title: "Business Analyst IT",
      company: "Bureau Veritas Group | Paris",
      date: "Depuis 01/2025",
      description: "Cadrage fonctionnel et déploiement de l'application internationale critique VeriStar Green.",
      bullets: [
        { highlight: "Cadrage & Spécifications :", text: "Recueil des besoins auprès des Business Owners et découpage précis en user stories (Jira)." },
        { highlight: "Recette & UAT :", text: "Organisation autonome des phases de tests fonctionnels, qualification de bugs et validation des livrables." },
        { highlight: "Gestion du Changement :", text: "Rédaction des manuels d'utilisation (user guides) et formation directe des équipes métiers." }
      ],
      projectTag: "VeriStar Green",
      primaryCV: {
        file: "./Business-Analyst-Sophie.pdf",
        label: "CV Business Analyst IT"
      },
      secondaryCV: {
        file: "./Audit It_Sophie.pdf",
        label: "CV Audit IT / Risques SI"
      }
    },
    audit: {
      title: "Auditrice IT & Risques SI",
      company: "Anjoy IT | Lyon",
      date: "01/2024 – 08/2024",
      description: "Mission d'évaluation des risques SI et audit de sécurité applicative sur architectures critiques.",
      bullets: [
        { highlight: "Contrôle & Vulnérabilités :", text: "Cartographie technique (ISO 27005) et réalisation de pentests applicatifs selon le référentiel OWASP." },
        { highlight: "Supervision & Monitoring :", text: "Déploiement d'une infrastructure ELK (Kibana) pour le suivi en temps réel des KPIs de risques." },
        { highlight: "Gouvernance & IAM :", text: "Audit des droits d'accès Azure AD / Active Directory pour garantir la conformité des privilèges." }
      ],
      projectTag: "Risques OWASP & ELK",
      primaryCV: {
        file: "./Audit It_Sophie.pdf",
        label: "CV Audit IT / Risques SI"
      },
      secondaryCV: {
        file: "./Business-Analyst-Sophie.pdf",
        label: "CV Business Analyst IT"
      }
    }
  };

  // --- Fonction de Mise à Jour de l'Interface ---
  function switchLens(mode) {
    const isBA = mode === 'ba';
    const profile = data[mode];
    
    // 1. Déclenche une transition CSS douce (fade-out rapide)
    lensContent.classList.add('switching');
    
    setTimeout(() => {
      // 2. Modifie la classe du body pour adapter le Design System (couleurs d'accents)
      if (isBA) {
        body.classList.remove('lens-audit');
        body.classList.add('lens-ba');
        btnLensBA.classList.add('active');
        btnLensAudit.classList.remove('active');
        
        // Ajustement visuel de la timeline
        timeBV.classList.add('active-timeline');
        timeAnjoy.classList.remove('active-timeline');
      } else {
        body.classList.remove('lens-ba');
        body.classList.add('lens-audit');
        btnLensAudit.classList.add('active');
        btnLensBA.classList.remove('active');
        
        // Ajustement visuel de la timeline
        timeAnjoy.classList.add('active-timeline');
        timeBV.classList.remove('active-timeline');
      }
      
      // 3. Met à jour les textes et métadonnées du focus métier
      focusTitle.textContent = profile.title;
      focusCompany.textContent = profile.company;
      focusDate.textContent = profile.date;
      focusDesc.textContent = profile.description;
      projectTagText.textContent = profile.projectTag;
      
      // 4. Reconstruction des puces d'expériences clés
      bulletList.innerHTML = '';
      profile.bullets.forEach((bullet, index) => {
        const li = document.createElement('li');
        li.className = 'bullet-item';
        li.style.transitionDelay = `${index * 0.06}s`;
        li.innerHTML = `
          <span class="bullet-icon">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </span>
          <span class="bullet-text">
            <span class="bullet-highlight">${bullet.highlight}</span> ${bullet.text}
          </span>
        `;
        bulletList.appendChild(li);
        
        // Permet de déclencher l'animation d'entrée avec micro-retard
        requestAnimationFrame(() => {
          setTimeout(() => {
            li.classList.add('visible');
          }, 30);
        });
      });
      
      // 5. Mise à jour dynamique des badges compétences (Highlighting interactif)
      skillTags.forEach(tag => {
        const isTagBA = tag.classList.contains('skill-ba');
        const isTagAudit = tag.classList.contains('skill-audit');
        const isCommon = tag.classList.contains('skill-common');
        
        if (isCommon) {
          tag.classList.add('active-skill');
        } else if (isBA && isTagBA) {
          tag.classList.add('active-skill');
        } else if (!isBA && isTagAudit) {
          tag.classList.add('active-skill');
        } else {
          tag.classList.remove('active-skill');
        }
      });
      
      // 6. Adaptation intelligente des boutons de téléchargement de CV
      btnDownloadPrimary.setAttribute('href', profile.primaryCV.file);
      btnDownloadPrimary.querySelector('span').textContent = profile.primaryCV.label;
      
      btnDownloadSecondary.setAttribute('href', profile.secondaryCV.file);
      btnDownloadSecondary.querySelector('span').textContent = profile.secondaryCV.label;
      
      // 7. Révèle le contenu mis à jour (fade-in avec rebond)
      lensContent.classList.remove('switching');
      
    }, 300); // 300ms correspond au timing de la transition CSS optimisée
  }

  // --- Gestionnaires d'Événements (Clics Commutateur) ---
  btnLensBA.addEventListener('click', () => {
    if (!body.classList.contains('lens-ba')) {
      switchLens('ba');
    }
  });

  btnLensAudit.addEventListener('click', () => {
    if (!body.classList.contains('lens-audit')) {
      switchLens('audit');
    }
  });

  // --- Effet de Lueur Premium au Curseur & Toucher ---
  let glowX = 50;
  let glowY = 30;
  
  function updateGlowPosition(clientX, clientY) {
    // Calcule le pourcentage par rapport à la taille de l'écran
    const percentX = (clientX / window.innerWidth) * 100;
    const percentY = (clientY / window.innerHeight) * 100;
    
    // Filtre pour des transitions très fluides
    glowX += (percentX - glowX) * 0.1;
    glowY += (percentY - glowY) * 0.1;
    
    body.style.setProperty('--glow-x', `${glowX.toFixed(2)}%`);
    body.style.setProperty('--glow-y', `${glowY.toFixed(2)}%`);
  }

  // Mousemove pour ordinateurs
  window.addEventListener('mousemove', (e) => {
    updateGlowPosition(e.clientX, e.clientY);
  });

  // Touchmove pour écrans mobiles (interactivité tactile premium)
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      updateGlowPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // --- Observateur d'Intersection pour Révéler les Éléments au Scroll ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target); // Désactivation de l'observation pour optimiser le processeur
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // --- Indicateur de Progression de Scroll & Ligne de Timeline ---
  const timeline = document.querySelector('.timeline');
  const timelineProgress = document.getElementById('timelineProgress');
  const scrollProgress = document.getElementById('scrollProgress');

  function updateScrollEffects() {
    // 1. Barre de progression supérieure
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    // 2. Remplissage de la ligne de timeline
    if (timeline && timelineProgress) {
      const rect = timeline.getBoundingClientRect();
      const timelineHeight = rect.height;
      
      const triggerPoint = window.innerHeight * 0.75;
      const timelineTop = rect.top;
      
      let progressPercent = 0;
      if (timelineTop < triggerPoint) {
        const scrolled = triggerPoint - timelineTop;
        progressPercent = Math.min(Math.max((scrolled / timelineHeight) * 100, 0), 100);
      }
      timelineProgress.style.height = `${progressPercent}%`;
    }
  }

  // Écouteur de scroll optimisé pour les performances mobiles
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      requestAnimationFrame(() => {
        updateScrollEffects();
        isScrolling = false;
      });
      isScrolling = true;
    }
  }, { passive: true });

  // Calcul initial au chargement
  updateScrollEffects();

  // --- Initialisation par défaut ---
  // Démarre par défaut sur le profil Business Analyst avec les compétences associées surlignées
  switchLens('ba');
  
});
