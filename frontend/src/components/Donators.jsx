import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Donators = () => {
  return (
    <>
     <div className="flex gap-10">
            <div className="flex-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/image/donator-1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="pb-5">
                      <h4 className="font-semibold text-base">
                        <Link
                          to=""
                          className="text-[#1e1e1e] hover:text-[#d43c18]"
                        >
                          Lester Lane
                        </Link>
                      </h4>
                      <h5 className="text-sm font-semibold text-[#959595]">
                        <Link
                          to=""
                          className="text-[#959595] hover:text-[#d43c18] transition-all"
                        >
                          Support Millitary Families
                        </Link>
                      </h5>
                    </div>
                    <hr />
                    <div className="flex justify-between py-3">
                      <p className="font-semibold">Donated</p>
                      <h5 className="text-xl text-[#d43c18] font-medium">
                        $12300
                      </h5>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="flex-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/image/donator-2.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="pb-5">
                      <h4 className="font-semibold text-base">
                        <Link
                          to=""
                          className="text-[#1e1e1e] hover:text-[#d43c18]"
                        >
                          Tanya Cooper
                        </Link>
                      </h4>
                      <h5 className="text-sm font-semibold text-[#959595]">
                        <Link
                          to=""
                          className="text-[#959595] hover:text-[#d43c18] transition-all"
                        >
                          Family Support Program
                        </Link>
                      </h5>
                    </div>
                    <hr />
                    <div className="flex justify-between py-3">
                      <p className="font-semibold">Donated</p>
                      <h5 className="text-xl text-[#d43c18] font-medium">
                        $8400
                      </h5>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="flex-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/image/donator-3.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="pb-5">
                      <h4 className="font-semibold text-base">
                        <Link
                          to=""
                          className="text-[#1e1e1e] hover:text-[#d43c18]"
                        >
                          Joey Hogan
                        </Link>
                      </h4>
                      <h5 className="text-sm font-semibold text-[#959595]">
                        <Link
                          to=""
                          className="text-[#959595] hover:text-[#d43c18] transition-all"
                        >
                          Sponsor an Orphan Child
                        </Link>
                      </h5>
                    </div>
                    <hr />
                    <div className="flex justify-between py-3">
                      <p className="font-semibold">Donated</p>
                      <h5 className="text-xl text-[#d43c18] font-medium">
                        $5400
                      </h5>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="flex-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/image/donator-4.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="pb-5">
                      <h4 className="font-semibold text-base ">
                        <Link
                          to=""
                          className="text-[#1e1e1e] hover:text-[#d43c18]"
                        >
                          Leticia Rivera
                        </Link>
                      </h4>
                      <h5 className="text-sm font-semibold ">
                        <Link
                          to=""
                          className="text-[#959595] hover:text-[#d43c18] transition-all"
                        >
                          Child Protection Program
                        </Link>
                      </h5>
                    </div>
                    <hr />
                    <div className="flex justify-between py-3">
                      <p className="font-semibold">Donated</p>
                      <h5 className="text-xl text-[#d43c18] font-medium">
                        $5400
                      </h5>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div> 
    </>
  )
}

export default Donators