 let data = [
    {
      title: "judul1",
      province: "DKI Jakarta",
      image: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/02/726581976.png",
      synopsis: "One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive.",
      story: "ini content One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive."
    },
    {
      title: "judul2",
      province: "Jawa Barat",
      image: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/02/726581976.png",
      synopsis: "One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive.",
      story: "ini content One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive."
    },
    {
      title: "judul3",
      province: "DKI Jakarta",
      image: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/02/726581976.png",
      synopsis: "One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive.",
      story: "ini content One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive."
    },
    {
      title: "judul4",
      province: "Jawa Barat",
      image: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/02/726581976.png",
      synopsis: "One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive.",
      story: "ini content One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive."
    },
    {
      title: "judul5",
      province: "DKI Jakarta",
      image: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/02/726581976.png",
      synopsis: "One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive.",
      story: "ini content One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive."
    },
    {
      title: "judul6",
      province: "Jawa Barat",
      image: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/02/726581976.png",
      synopsis: "One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive.",
      story: "ini content One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive."
    },
  ]

  let tampung = document.getElementById("contoh")

  for (let i in data) {
    tampung.innerHTML += `
      <div class="col-3 mx-auto" style="margin-bottom: 30px;">
        <div class="card shadow-lg mt-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <a class="d-block blur-shadow-image">
              <img src="${data[i].image}" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg">
            </a>
          </div>
          <div class="card-body">
            <h4>${data[i].title}</h4>
            <p>
              One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That&#34;s pretty impressive.
            </p>
            <a href="javascript:;" class="text-primary icon-move-right">More about us
              <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    `
  }