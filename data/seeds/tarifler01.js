/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/* exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tarifler")
    .insert({
      tarif_adi: "Spaghetti Bolonez",
    })
    .then((idList) => {
      return knex("adimlar")
        .insert([
          {
            adim_sirasi: 1,
            adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
            tarif_id: idList[0],
          },
          {
            adim_sirasi: 2,
            adim_talimati: "1 yemek kaşığı zeytinyağı ekleyin",
            tarif_id: idList[0],
          },
        ])
        .then((adimIdList) => {
          return knex("icindekiler")
            .insert({
              icindekiler_adi: "zeytinyağı",
              miktar: 0.014,
            })
            .then((icindekilerIdList) => {
              return knex("icindekiler_adimlar").insert([
                {
                  icindekiler_id: icindekilerIdList[0],
                  adim_id: adimIdList[0],
                },
                {
                  icindekiler_id: icindekilerIdList[0],
                  adim_id: adimIdList[1],
                },
              ]);
            });
        });
    });
}; */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tarifler").insert([{ tarif_adi: "Spagetti Bolonez" }]);
  await knex("adimlar").insert([
    {
      adim_sirasi: 1,
      adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
      tarif_id: 1,
    },
    {
      adim_sirasi: 2,
      adim_talimati: "1 yemek kaşığı zeytinyağı ekleyin",
      tarif_id: 1,
    },
  ]);
  await knex("icindekiler").insert([
    { icindekiler_adi: "zeytinyağı", miktar: 0.014 },
  ]);
  await knex("icindekiler_adimlar").insert([
    { icindekiler_id: 1, adim_id: 1 },
    { icindekiler_id: 1, adim_id: 2 },
  ]);
};
