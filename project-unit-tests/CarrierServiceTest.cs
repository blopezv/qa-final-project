using Microsoft.VisualStudio.TestTools.UnitTesting;
using ReconLogistics.Framework.Common.Test;
using ReconLogistics.Framework.STD.Communication.AgentService;
using ReconLogistics.TMS.Business.Contracts;
using ReconLogistics.TMS.Business.Entities.DTOs.Carrier;
using System;

namespace ReconLogistics.TMS.ServiceHost.Cloud.Test
{
    [TestClass]
    public class CarrierServiceTest : BaseTest
    {
		[TestMethod]
        public void CarrierServiceRemoveCarrierByIDTest()
        {
            var result = _carrierService.RemoveCarrier(8019);
            Assert.AreEqual("Carrier removed", result.MessageList[0].Description);
        }

        [TestMethod]
        public void CarrierServiceRemoveCarrierInvalidIDTest()
        {
            var result = _carrierService.RemoveCarrier(0);
            Assert.AreEqual("Carrier identifier is invalid", result.MessageList[0].Description);
        }

        [TestMethod]
        public void CarrierServiceRemoveCarrierWidthContractTest()
        {
            var result = _carrierService.RemoveCarrier(9);
            Assert.AreEqual("Carrier not removed", result.MessageList[0].Description);
        }

        [TestMethod]
        public void CarrierServiceRemoveCarrierNotfoundTest()
        {
            var result = _carrierService.RemoveCarrier(100000087);
            Assert.AreEqual("Carrier not found", result.MessageList[0].Description);
        }
	}
}